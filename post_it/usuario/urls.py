from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('remover/<id>', views.excluir, name='excluir'),
   path('alterar/<id>', views.alterar, name='alterar'),
    path('buscar/<id>', views.buscar, name='buscar')
]
