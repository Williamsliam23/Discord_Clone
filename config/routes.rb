Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create, :delete, :show, :index]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"

end
