# frozen_string_literal: true

class Api::V1::SpecsController < ApplicationController
  def index
    specs = SpecSerializer.new(Spec.includes(:faculty).all)
    render json: specs.serialized_json
  end
end
