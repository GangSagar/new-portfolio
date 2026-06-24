from rest_framework import viewsets
from rest_framework.response import Response
from apps.projects.serializers import ProjectSerializer, TechnologySerializer
from apps.projects.services import ProjectService, TechnologyService

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ProjectSerializer
    lookup_field = 'slug'

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.service = ProjectService()

    def get_queryset(self):
        featured_param = self.request.query_params.get('featured')
        featured = None
        if featured_param is not None:
            featured = featured_param.lower() == 'true'
        return self.service.get_projects(featured=featured)


class TechnologyViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = TechnologySerializer

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.service = TechnologyService()

    def get_queryset(self):
        return self.service.get_active_technologies()
