from django.urls import path
from .views import get_records, record_details

urlpatterns = [
    path('records/', get_records, name='get_records'),
    path('records/<int:id>', record_details, name='record_details'),
]
