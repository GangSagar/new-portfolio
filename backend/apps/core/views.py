from rest_framework import viewsets
from rest_framework.response import Response
from apps.core.serializers import SocialLinkSerializer
from apps.core.services import SocialLinkService

class SocialLinkViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = SocialLinkSerializer
    
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.service = SocialLinkService()

    def get_queryset(self):
        return self.service.get_active_social_links()
