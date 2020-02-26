# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::EventsController, type: :controller do
  describe '#update' do
    context 'with valid params' do
      let(:student) { FactoryBot.create(:user, :student) }
      let(:company) { FactoryBot.create(:company) }
      let(:company_for_change) { FactoryBot.create(:company) }
      let(:correct_params) do
        {
          event: {
            description: 'some_desctiption',
            event_time: Date.parse('Dec 1, 2019'),
            company_id: company.id,
            event_type: 'interview'
          }
        }
      end
      let(:event) { FactoryBot.create(:event, :discussion, user: student, company: company_for_change) }

      before do
        put :update, params: { id: event.id, **correct_params }
      end

      it 'updates the event and sends the correct responce' do
        updated_event = JSON.parse(response.body)['data']['attributes']
        expect(updated_event['description']).to eq(correct_params[:event][:description])
        expect(updated_event['event_type']).to eq(correct_params[:event][:event_type])
        expect(updated_event['company']['id']).to eq(correct_params[:event][:company_id])
      end
    end
  end

  describe '#create' do
    context 'with valid params' do
      let(:student) { FactoryBot.create(:user, :student) }
      let(:company) { FactoryBot.create(:company) }
      let(:correct_params) do
        {
          event: {
            description: 'some_desctiption',
            event_time: Date.parse('Dec 1, 2019'),
            company_id: company.id,
            user_id: student.id
          }
        }
      end

      before do
        put :create, params: correct_params
      end

      it 'creates the event and sends the correct responce' do
        updated_event = Event.last
        expect(updated_event.description).to eq(correct_params[:event][:description])
        expect(updated_event.event_time).to eq(correct_params[:event][:event_time])
        expect(updated_event.user_id).to eq(correct_params[:event][:user_id])
        expect(updated_event.company_id).to eq(correct_params[:event][:company_id])
      end
    end
  end

  describe '#destroy' do
    context 'with valid params' do
      let(:event) { FactoryBot.create(:event) }

      before do
        put :destroy, params: { id: event.id }
      end

      it 'deletes the user' do
        expect(Event.find_by(id: event.id)).to be_nil
        expect(JSON.parse(response.body)['success'].symbolize_keys[:id]).to eq(event.id)
      end
    end
  end
end
