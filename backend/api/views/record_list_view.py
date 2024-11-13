from rest_framework.views import APIView
from rest_framework.response import Response
from ..services.record_service import RecordService

class RecordListView(APIView):
    """
    Handles GET (list records) and POST (create a new record) for /records endpoint
    """

    def get(self, request):
        serializedData = RecordService.get_all_records()
        return Response(serializedData)

    def post(self, request):
        data, status_code = RecordService.create_record(request.data)
        return Response(data, status=status_code)
