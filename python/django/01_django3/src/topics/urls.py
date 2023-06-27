from django.urls import path
from .views import IndexView, Api
#from django.views.generic.base import TemplateView

app_name = 'topics'

urlpatterns = [
    path('', IndexView.as_view(template_name="index.html"), name='index'),
    path('<int:id>', IndexView.as_view(template_name="index.html"), name='index'),
    path("delete/<int:id>", IndexView.as_view(template_name="index.html"), name="index"),
    path("api/topics", Api.as_view(), name="api"),

]
