from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('criar_post_it/', views.criar_post_it, name='criar_post_it'),
]
