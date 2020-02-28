# frozen_string_literal: true

class Api::V1::CompaniesController < ApplicationController
  before_action :set_company, only: %i[show update destroy]

  def index
    companies = CompanySerializer.new(Company.includes(:contact, :profiles).all)
    render json: companies.serialized_json
  end

  def show
    render json: CompanySerializer.new(@company).serialized_json
  end

  def update
    @company.update(company_params)
    render json: CompanySerializer.new(@company).serialized_json
  end

  def destroy
    render json: { success: @company.destroy }
  end

  def create
    company = Company.create(company_params)
    render json: CompanySerializer.new(company).serialized_json
  end

  private

  def set_company
    @company = Company.find(params[:id])
  end

  def company_params
    params.require(:company).permit(%i[contact_id name])
  end
end
