# frozen_string_literal: true

class Api::V1::EventsController < ApplicationController
  before_action :set_event, only: %i[show update destroy]
  def index
    events = EventSerializer.new(Event.includes(:company).all)
    render json: events.serialized_json
  end

  def show
    render json: EventSerializer.new(@event).serialized_json
  end

  def update
    @event.update(event_params)
    render json: EventSerializer.new(@event).serialized_json
  end

  def destroy
    render json: { success: @event.destroy }
  end

  def create
    event = Event.create(event_params)
    render json: EventSerializer.new(event).serialized_json
  end

  private

  def set_event
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(%i[user_id company_id description event_time event_type])
  end
end
