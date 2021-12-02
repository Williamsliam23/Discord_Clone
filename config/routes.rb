Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :messages, only: [:index, :show, :destroy, :create, :update]
  end

  root "static_pages#root"

end
