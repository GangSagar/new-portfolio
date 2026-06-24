from apps.core.models import SocialLink, SiteConfiguration

class SocialLinkRepository:
    @staticmethod
    def get_all_active():
        return SocialLink.objects.filter(is_active=True).order_by('display_order', 'platform')

    @staticmethod
    def get_by_id(link_id):
        try:
            return SocialLink.objects.get(id=link_id, is_active=True)
        except SocialLink.DoesNotExist:
            return None


class SiteConfigurationRepository:
    @staticmethod
    def get_all_active():
        return SiteConfiguration.objects.filter(is_active=True)

    @staticmethod
    def get_value_by_key(key, default=None):
        try:
            config = SiteConfiguration.objects.get(config_key=key, is_active=True)
            return config.config_value
        except SiteConfiguration.DoesNotExist:
            return default
