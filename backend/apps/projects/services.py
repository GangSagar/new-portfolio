from apps.projects.repositories import ProjectRepository, TechnologyRepository

class ProjectService:
    def __init__(self):
        self.repository = ProjectRepository()

    def get_projects(self, featured=None, ordering='display_order'):
        return self.repository.get_all_active(ordering=ordering, featured=featured)

    def get_project_by_slug(self, slug):
        return self.repository.get_by_slug(slug)


class TechnologyService:
    def __init__(self):
        self.repository = TechnologyRepository()

    def get_active_technologies(self):
        return self.repository.get_all_active()
