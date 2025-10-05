export const useProjects = () => ({
  query(checkTag: boolean = true) {
    const route = useRoute()
    const showHiddenProjects = useCookie<number | null>('show_hidden_projects')

    let query = queryCollection('projects').where('published', '=', true)
    if (showHiddenProjects.value !== 2) {
      query = query.orWhere((q) => q.where('hidden', 'IS NULL').where('hidden', '=', false))
    }
    if (route.query.tag && checkTag) {
      query = query.where('tags', 'LIKE', `%${route.query.tag}%`)
    }

    return query
  },

  listQuery() {
    return this.query()
      .select('title', 'description', 'tags', 'path', 'date', 'published', 'hidden', 'preview')
      .order('date', 'DESC')
  },

  async getList(limit: number = 6, tag?: string) {
    let query = this.listQuery().limit(limit)
    if (tag) {
      query = query.where('tags', 'LIKE', `%${tag}%`)
    }
    return await query.all()
  },

  async getByPath(path: string) {
    return await this.query().path(`/projects/${path}`).first()
  },

  async getCount() {
    return <number>await this.query().count()
  },

  async getAllTags() {
    // с сортировкой по количеству использований тэгов
    return await this.query(false)
      .select('tags')
      .all()
      .then((items) => {
        const tags = items.flatMap((item) => item.tags || [])
        const tagCount: Record<string, number> = {}
        tags.forEach((tag) => {
          tagCount[tag] = (tagCount[tag] || 0) + 1
        })
        return Object.entries(tagCount)
          .sort(([, a], [, b]) => b - a)
          .map(([tag]) => tag)
          .filter((tag) => (tagCount[tag] ?? 0) > 2)
      })
  },

  async getSimilarByTags(tags: string[], excludePath: string | undefined, limit: number = 3) {
    let query = this.listQuery()
      .limit(limit)
      .where('path', '<>', excludePath)
      .orWhere((q) => {
        tags.forEach((tag) => {
          q.where('tags', 'LIKE', `%${tag}%`)
        })
        return q
      })

    return await query.all()
  },
})
