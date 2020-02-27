# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_21_141501) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.bigint "contact_id"
    t.index ["contact_id"], name: "index_companies_on_contact_id"
  end

  create_table "contacts", force: :cascade do |t|
    t.string "email"
    t.string "address"
    t.string "phone_number"
  end

  create_table "education_processes", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "spec_id"
    t.date "start_time"
    t.date "end_time"
    t.index ["spec_id"], name: "index_education_processes_on_spec_id"
    t.index ["user_id"], name: "index_education_processes_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "company_id"
    t.integer "event_type"
    t.text "description"
    t.date "event_time"
    t.index ["company_id"], name: "index_events_on_company_id"
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "faculties", force: :cascade do |t|
    t.string "name"
  end

  create_table "profiles", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.date "date_of_birth"
    t.bigint "contact_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contact_id"], name: "index_profiles_on_contact_id"
  end

  create_table "roles", force: :cascade do |t|
    t.integer "role"
    t.integer "access_level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "specs", force: :cascade do |t|
    t.string "name"
    t.bigint "faculty_id"
    t.index ["faculty_id"], name: "index_specs_on_faculty_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.bigint "profile_id"
    t.bigint "role_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_users_on_profile_id"
    t.index ["role_id"], name: "index_users_on_role_id"
  end

end
