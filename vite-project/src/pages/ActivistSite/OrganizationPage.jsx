import React from "react";
import ActivistAccountPage from "./ActivistAccountPage";
import '../../style.css'

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <div className="container mx-auto p-6 max-w-screen-lg">



            <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Delete File</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Are you sure you want to delete file.txt?</p>
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>


                {/* Button Section */}
                <div className="text-center my-4">
                    <button className="btn btn-primary">Hello daisyUI</button>
                </div>

                {/* Avatar Section */}
                <div className="flex justify-center my-6">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img 
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
                                alt="Avatar"
                            />
                        </div>
                    </div>
                </div>

                {/* Accordion Section */}
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            2025/02/16 Updated Legend
                        </div>
                        <div className="collapse-content">
                            <p>
                                Hello, I know it's been a while since my last post, but I've updated the content immensely.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            2025/02/24 Improved Reporting System
                        </div>
                        <div className="collapse-content">
                            <p>Reporting System Now includes:</p>
                            <li>Harassment</li>
                            <li>Historical Innaccuracies</li>
                            <li>Grammar Issue</li>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            2025/03/02 Improved Performance
                        </div>
                        <div className="collapse-content">
                            <p>The site now runs 2x faster</p>
                        </div>
                    </div>
                </div>

                {/* Progress Bar Section */}
                <div className="flex justify-center my-8">
                    <div className="radial-progress text-primary" style={{ "--value": 70 }} aria-valuenow={70} role="progressbar">
                        70%
                    </div>
                </div>

                {/* Additional Component */}
                <ActivistAccountPage />
            </div>
        </div>
    );
}
