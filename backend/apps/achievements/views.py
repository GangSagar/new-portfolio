from rest_framework import viewsets
from apps.achievements.serializers import AchievementSerializer, CertificationSerializer
from apps.achievements.services import AchievementService, CertificationService

class AchievementViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = AchievementSerializer

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.service = AchievementService()

    def get_queryset(self):
        return self.service.get_achievements()


class CertificationViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = CertificationSerializer

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.service = CertificationService()

    def get_queryset(self):
        return self.service.get_certifications()
