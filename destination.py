from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .model import requirementbased
import json

@csrf_exempt
def get_recommendations(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        city = data['city']
        number = int(data['number'])
        features = data['features']
        recommendations = requirementbased(city, number, features)
        return JsonResponse(recommendations.to_dict(orient='records'), safe=False)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
