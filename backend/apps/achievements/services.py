from apps.achievements.repositories import AchievementRepository, CertificationRepository

class AchievementService:
    def __init__(self):
        self.repository = AchievementRepository()

    def get_achievements(self):
        return self.repository.get_all_active()


class CertificationService:
    def __init__(self):
        self.repository = CertificationRepository()

    def get_certifications(self):
        return self.repository.get_all_active()
