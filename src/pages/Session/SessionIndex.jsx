import React from 'react';
// Components
import SessionSchedule from '../../components/Session/SessionSchedule';

const SessionIndex = () => {
	return (
		<section className='mt-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 mx-auto'>
						<p className='display-3'>Sessions</p>
						<SessionSchedule />
					</div>
				</div>
			</div>
		</section>	
	);
};

export default SessionIndex;



  // create_table "sessions", force: :cascade do |t|
  //   t.integer "max_student"
  //   t.date "date"
  //   t.bigint "formation_id"
  //   t.bigint "creator_id"
  //   t.datetime "created_at", precision: 6, null: false
  //   t.datetime "updated_at", precision: 6, null: false
  //   t.index ["creator_id"], name: "index_sessions_on_creator_id"
  //   t.index ["formation_id"], name: "index_sessions_on_formation_id"