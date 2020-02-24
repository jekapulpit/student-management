# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'home#index'
  namespace :api do
    namespace :v1 do
      resources :students
    end
  end
end
