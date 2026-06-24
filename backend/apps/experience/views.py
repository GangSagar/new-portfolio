from rest_framework import viewsets
from apps.experience.serializers import ExperienceSerializer
from apps.experience.services import ExperienceService

class ExperienceViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ExperienceSerializer

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.service = ExperienceService()

    def get_queryset(self):
        return self.service.get_experiences()
