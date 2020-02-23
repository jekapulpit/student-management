# frozen_string_literal: true

class Api::V1::StudentsController < ApplicationController
  def index
    students = UserSerializer.new(User.includes(:profile, :spec).where(role: Role.find_by(role: :student)))
    render json: students.serialized_json
  end
end
