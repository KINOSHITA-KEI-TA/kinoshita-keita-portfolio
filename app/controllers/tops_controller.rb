class TopsController < ApplicationController
  def index
  end

  
  def new
    @top = Top.new
  end

  def create
    @top = Top.new(top_params)
    if @top.save
      redirect_to root_path,notice: 'メッセージが送信されました'
    else
      flash.now[:alert] = 'メッセージを入力してください。'
      render :new
    end
  end


  private
  def top_params
    params.require(:top).permit(:name,:email,:text)
  end

end
