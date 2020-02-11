class TodosController < ApplicationController
    before_action :set_reservation, only: [:show, :update, :destroy]
  
    # GET 
    def index
      @reservations = current_user.reservations
      json_response(@reservations)
    end
  
    # POST 
    def create
      @reservation = current_user.reservations.create!(reservation_params)
      json_response(@reservation, :created)
    end
  
    # GET 
    def show
      json_response(@reservation)
    end
  
    # PUT 
    def update
      @reservation.update(todo_params)
      json_response(status: 'SUCCESS', message: 'updated the reservation', data: @reservation.reservation_desc)
    end
  
    # DELETE 
    def destroy
      @reservation.destroy
      json_response(status: 'SUCCESS', message: 'delete the reservation', data: @reservation.reservation_desc)
  
    end
  
    private
  
    def reservation_params
      # whitelist params
      params.permit(:reservation_desc, :created_by)
    end
  
    def set_reservation
      @reservation = Reservation.find(params[:id])
    end
  end
  