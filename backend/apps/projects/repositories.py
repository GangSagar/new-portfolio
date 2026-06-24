from apps.projects.models import Project, Technology

class ProjectRepository:
    @staticmethod
    def get_all_active(ordering='display_order', featured=None):
        queryset = Project.objects.filter(is_active=True, status='active')
        if featured is not None:
            queryset = queryset.filter(featured=featured)
        return queryset.order_by(ordering)

    @staticmethod
    def get_by_slug(slug):
        try:
            return Project.objects.prefetch_related('technologies', 'metrics').get(slug=slug, is_active=True, status='active')
        except Project.DoesNotExist:
            return None


class TechnologyRepository:
    @staticmethod
    def get_all_active():
        return Technology.objects.filter(is_active=True).order_by('category', 'name')
