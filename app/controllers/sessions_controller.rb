class SessionsController < ApplicationController
  def new
  end

  def create
    customer = Customer.find_by(email: params[:session][:email].downcase)
    if customer && customer.authenticate(params[:session][:password])
      log_in customer
      redirect_to customer
    else
      # エラーメッセージを作成する
      render 'new'
    end
  end

end
