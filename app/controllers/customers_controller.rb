class CustomersController < ApplicationController
  before_action :logged_in_customer, except: [:new, :create]

  def new
    @customer = Customer.new
  end

  def create
    @customer = Customer.new(customer_params)
    if @customer.save
      log_in @customer
      redirect_to @customer
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if current_customer.update(customer_params)
      redirect_to current_customer
    else
      render 'edit'
    end
  end

  def show
    return redirect_to log_in_path if params[:id] == nil
    @customer = Customer.find(params[:id])
  end

  private

  def customer_params
    params.require(:customer).permit(:name, :email, :password, :password_confirmation)
  end

  # ログイン済みユーザーかどうか確認
  def logged_in_customer
    unless logged_in?
      redirect_to log_in_path
    end
  end
end
