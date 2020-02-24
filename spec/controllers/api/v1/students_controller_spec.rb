require 'rails_helper'

RSpec.describe Api::V1::StudentsController, type: :controller do
  describe '#update' do
    context 'with valid params' do
      let(:correct_params) do
        {
            user: { username: 'some_new_username' },
            profile: {
                first_name: 'some_first_name',
                last_name: 'some_last_name',
                date_of_birth: Date.parse('Dec 18, 2019')
            },
            contact: {
                email: 'some_email',
                phone_number: 'some_phone_number',
                address: 'some_address'
            },
            education_process: {
                spec_id: 1,
                start_time: Date.parse('2021-01-31'),
                end_time: Date.parse('2021-01-31')
            }
        }
      end
      let(:user) { FactoryBot.create(:user) }

      before do
        put :update, params: { id: user.id, **correct_params}
      end

      it 'updates the user' do
        updated_user = User.find(user.id)
        expect(updated_user.username).to eq(correct_params[:user][:username])
        expect(updated_user.profile.first_name).to eq(correct_params[:profile][:first_name])
        expect(updated_user.contact.phone_number).to eq(correct_params[:contact][:phone_number])
      end
    end
  end
end
