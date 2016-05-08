class FoodsController < ApplicationController
  def index

    respond_to do |format|
    format.html
    format.json{ render json: Food.all }
    end
  end

  def create
    respond_with Food.create(food_params)
  end

  def destroy
    respond_with Food.destroy(params[:id])
  end

private
  def food_params
    params.require(:food).permit(:name, :wine_type)
  end
end


end
