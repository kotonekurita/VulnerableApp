module SessionsHelper
  # 渡されたユーザーでログインする
  def log_in(customer)
    session[:customer_id] = customer.id
  end

   # 現在ログインしているユーザーを返す (ユーザーがログイン中の場合のみ)
  def current_customer
    @current_customer ||= Customer.find_by(id: session[:customer_id])
  end

  # ユーザーがログインしていればtrue、その他ならfalseを返す
  def logged_in?
    !current_customer.nil?
  end

  # 現在のユーザーをログアウトする
  def log_out
    session.delete(:customer_id)
    @current_customer = nil
  end
end
