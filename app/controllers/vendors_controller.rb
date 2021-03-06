class VendorsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_vendor, only: [:show, :edit, :update, :destroy]
  # before_action :check_logged_in, only: [:follow, :unfollow]
  # layout "header"
  # GET /vendors
  # GET /vendors.json
  def index
    if params[:product].blank?
      @vendors = Vendor.all.order("name ASC").paginate(:page => params[:page], :per_page => 4)
    else
      @product_id = Product.find_by(name:params[:product]).id
      @vendors = Vendor.where(product_id: @product_id).order("name ASC").paginate(:page => params[:page], :per_page => 4)
    end
  end

  # GET /vendors/1
  # GET /vendors/1.json
  def show
  end

  # GET /vendors/new
  def new
    @vendor = Vendor.new
  end

  # GET /vendors/1/edit
  def edit
  end

  # POST /vendors
  # POST /vendors.json
  def create
    @vendor = Vendor.new(vendor_params)
    @markets = Market.where(id: params["markets"])
    respond_to do |format|
      if @vendor.save
        @vendor.markets << @markets
        format.html { redirect_to @vendor, notice: 'Vendor was successfully created.' }
        format.json { render :show, status: :created, location: @vendor }
      else
        format.html { render :new }
        format.json { render json: @vendor.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /vendors/1
  # PATCH/PUT /vendors/1.json
  def update
    respond_to do |format|
      if @vendor.update(vendor_params)
        @markets = Market.where(id: params["markets"])
        @vendor.markets.destroy_all
        @vendor.markets << @markets
        format.html { redirect_to @vendor, notice: 'Vendor was successfully updated.' }
        format.json { render :show, status: :ok, location: @vendor }
      else
        format.html { render :edit }
        format.json { render json: @vendor.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /vendors/1
  # DELETE /vendors/1.json
  def destroy
    @vendor.destroy
    respond_to do |format|
      format.html { redirect_to vendors_url, notice: 'Vendor was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def follow
    # if current_user
      @vendor = Vendor.friendly.find(params[:id])
      current_user.follow(@vendor)
      redirect_to :back
    # else check_logged_in
    # end
  end

  def unfollow
    @vendor = Vendor.friendly.find(params[:id])
    current_user.stop_following(@vendor)
    redirect_to :back
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vendor
      @vendor = Vendor.friendly.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def vendor_params
      params.require(:vendor).permit(:name, :description, :email, :website, :facebook, :phone, :twitter, :instagram, :product_id, :thumbnail, :date, :time, :slug, :user_id)
    end

    def check_logged_in
      # unless current_user
        flash[:warning] = "You have to be logged in as that user to do that!"
        # redirect_to :show
      # end
    end
end