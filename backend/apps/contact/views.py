from rest_framework import viewsets, status
from rest_framework.response import Response
from apps.contact.serializers import ContactMessageSerializer, ResumeDownloadSerializer
from apps.contact.services import ContactService, ResumeDownloadService

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0].strip()
    else:
        ip = request.META.get('REMOTE_ADDR', '')
    return ip


class ContactMessageViewSet(viewsets.GenericViewSet):
    serializer_class = ContactMessageSerializer

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.service = ContactService()

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            ip_address = get_client_ip(request)
            message_obj = self.service.submit_message(
                name=serializer.validated_data['name'],
                email=serializer.validated_data['email'],
                message=serializer.validated_data['message'],
                ip_address=ip_address
            )
            # Response envelope matching the contract
            return Response({
                "success": True,
                "message": "Message submitted successfully",
                "data": self.get_serializer(message_obj).data
            }, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ResumeDownloadViewSet(viewsets.GenericViewSet):
    serializer_class = ResumeDownloadSerializer

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.service = ResumeDownloadService()

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            ip_address = get_client_ip(request)
            download_obj = self.service.track_download(
                session_id=serializer.validated_data.get('session_id'),
                ip_address=ip_address,
                country=serializer.validated_data.get('country'),
                city=serializer.validated_data.get('city')
            )
            return Response({
                "success": True,
                "message": "Download tracked"
            }, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
