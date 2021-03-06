Rails.application.routes.draw do
  scope '/api' do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :groups, except: [:new, :edit]
    resources :users, only: [:index, :show]
  end
end
