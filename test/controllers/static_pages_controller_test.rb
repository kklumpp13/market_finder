require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get vendor_landing" do
    get :vendor_landing
    assert_response :success
  end

  test "should get customer_landing" do
    get :customer_landing
    assert_response :success
  end

end
