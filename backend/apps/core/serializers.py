from rest_framework import serializers
from apps.core.models import SocialLink, SiteConfiguration

class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = ['id', 'platform', 'url', 'icon_name', 'display_order']


class SiteConfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteConfiguration
        fields = ['id', 'config_key', 'config_value']
