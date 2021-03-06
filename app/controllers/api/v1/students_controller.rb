# frozen_string_literal: true

class Api::V1::StudentsController < ApplicationController
  before_action :set_student, only: %i[show update destroy]
  def index
    students = UserSerializer.new(User.includes(:profile, :spec, :events, :contact, :companies)
                                      .where(role: Role.find_by(role: :student)))
    render json: students.serialized_json
  end

  def show
    render json: UserSerializer.new(@student).serialized_json
  end

  def update
    User.transaction do
      @student.profile.update(profile_params)
      @student.education_process.update(education_process_params)
      @student.contact.update(contact_params)
      @student.save
      render json: UserSerializer.new(@student).serialized_json
    end
  end

  def destroy
    render json: { success: @student.destroy }
  end

  def create
    User.transaction do
      student = User.new(username: Faker::UniqueGenerator.marked_unique)
      student.profile = Profile.create(profile_params.merge(contact: Contact.create(contact_params)))
      student.education_process = EducationProcess.create(education_process_params)
      student.role = Role.find_or_create_by(role: :student)
      student.save
      render json: UserSerializer.new(student).serialized_json
    end
  end

  private

  def set_student
    @student = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(%i[username])
  end

  def profile_params
    params.require(:profile).permit(%i[first_name last_name date_of_birth contact_id])
  end

  def education_process_params
    params.require(:education_process).permit(%i[spec_id start_time end_time])
  end

  def contact_params
    params.require(:contact).permit(%i[email address phone_number])
  end
end
