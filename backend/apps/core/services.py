from apps.core.repositories import SocialLinkRepository, SiteConfigurationRepository

class SocialLinkService:
    def __init__(self):
        self.repository = SocialLinkRepository()

    def get_active_social_links(self):
        return self.repository.get_all_active()


class SiteConfigurationService:
    def __init__(self):
        self.repository = SiteConfigurationRepository()

    def get_active_configurations(self):
        return self.repository.get_all_active()

    def get_config_value(self, key, default=None):
        return self.repository.get_value_by_key(key, default)
