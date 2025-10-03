export function useProjectQuery() {
  const showHiddenProjects = useCookie<number | null>('show_hidden_projects')

  let query = queryCollection('projects').where('published', '=', true)
  if (showHiddenProjects.value !== 2) {
    query = query.orWhere((q) => q.where('hidden', 'IS NULL').where('hidden', '=', false))
  }

  return query
}

export function useProjectListQuery() {
  return useProjectQuery()
    .select('title', 'description', 'tags', 'path', 'date', 'published', 'hidden', 'preview')
    .order('date', 'DESC')
}

export async function useProjectList(limit: number = 6) {
  return await useProjectListQuery().limit(limit).all()
}

export async function useProjectByPath(path: string) {
  return await useProjectQuery().path(`/projects/${path}`).first()
}

export async function useProjectCount() {
  return <number>await useProjectQuery().count()
}
