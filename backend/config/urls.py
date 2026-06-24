"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
from rest_framework.routers import DefaultRouter

from apps.core.views import SocialLinkViewSet
from apps.projects.views import ProjectViewSet, TechnologyViewSet
from apps.experience.views import ExperienceViewSet
from apps.skills.views import SkillViewSet
from apps.achievements.views import AchievementViewSet, CertificationViewSet
from apps.contact.views import ContactMessageViewSet, ResumeDownloadViewSet
from apps.analytics.views import AnalyticsEventViewSet

from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)

# Custom health check endpoint
def health_check(request):
    return JsonResponse({"status": "healthy"})

# API Router setup
router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'technologies', TechnologyViewSet, basename='technology')
router.register(r'experience', ExperienceViewSet, basename='experience')
router.register(r'skills', SkillViewSet, basename='skill')
router.register(r'achievements', AchievementViewSet, basename='achievement')
router.register(r'certifications', CertificationViewSet, basename='certification')
router.register(r'social-links', SocialLinkViewSet, basename='social-link')
router.register(r'contact', ContactMessageViewSet, basename='contact')
router.register(r'resume/download', ResumeDownloadViewSet, basename='resume-download')
router.register(r'analytics/event', AnalyticsEventViewSet, basename='analytics-event')

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # API endpoints
    path('api/v1/health', health_check, name='health-check'),
    path('api/v1/', include(router.urls)),
    
    # OpenAPI / Swagger UI
    path('api/v1/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/v1/schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/v1/schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]

