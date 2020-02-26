# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'home#index'
  namespace :api do
    namespace :v1 do
      resources :students
      resources :events
      resources :companies
      resources :specs, only: %i[index]
    end
  end
end
