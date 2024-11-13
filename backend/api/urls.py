from django.urls import path
from .views.record_list_view import RecordListView
from .views.record_detail_view import RecordDetailView

urlpatterns = [
    path('records/', RecordListView.as_view(), name='get_records'),
    path('records/<int:id>', RecordDetailView.as_view(), name='record_details'),
]
