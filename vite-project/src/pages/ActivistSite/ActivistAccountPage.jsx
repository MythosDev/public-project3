import '../../style.css'

export default function () {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center py-8">
            {/* Account Visibility Section */}
            <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-full sm:w-64 mb-6">
                <legend className="fieldset-legend">Account Visibility</legend>
                <label className="fieldset-label flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="toggle" />
                    <span>Public</span>
                </label>
            </fieldset>

            {/* Notifications Section */}
            <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-full sm:w-64 mb-6">
                <legend className="fieldset-legend">Notifications</legend>
                {[
                    "Account Mentioned",
                    "Organization Events",
                    "Event Tickets",
                    "Event Reminders",
                    "New Followers",
                    "Messages",
                    "Friend Messages",
                    "Organization Requests"
                ].map((notification, index) => (
                    <label key={index} className="fieldset-label flex items-center mb-2 space-x-2">
                        <input type="checkbox" defaultChecked className="toggle" />
                        <span>{notification}</span>
                    </label>
                ))}
            </fieldset>

            {/* Login Section */}
            <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-full sm:w-64">
                <legend className="fieldset-legend">Login</legend>
                <label className="fieldset-label block mb-2">Email</label>
                <input type="email" className="input w-full mb-4" placeholder="Email" />

                <label className="fieldset-label block mb-2">Password</label>
                <input type="password" className="input w-full mb-4" placeholder="Password" />

                <button className="btn btn-neutral w-full">Login</button>
            </fieldset>
        </div>
    );
}
