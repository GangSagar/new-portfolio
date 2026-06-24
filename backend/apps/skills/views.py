from rest_framework import viewsets
from apps.skills.serializers import SkillSerializer
from apps.skills.services import SkillService

class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = SkillSerializer

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.service = SkillService()

    def get_queryset(self):
        category = self.request.query_params.get('category')
        return self.service.get_skills(category=category)
