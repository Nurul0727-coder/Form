export const StepOne=({setCurrentStep,onChange})=>{
    return (
        <div className="flex flex-col p-8">
            <b className="px-10"> Step 1</b>
            <label htmlFor="firstName">FirstName</label>
            <input className="border" value={form.firstName}/>

            <label htmlFor="lastName">LastName</label>
            <input className="border" value={form.lastName}/>

            <button onClick={()=>setCurrentStep(2)}>Next</button>
        </div>
    )
}