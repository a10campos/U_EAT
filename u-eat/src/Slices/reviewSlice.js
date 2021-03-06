import {createAsyncThunk, createSlice} from  "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name: 'review',
    extraReducers (builder) {
        builder
        .addCase(sendReview.fulfilled,(state,action)=>{
            if (action.payload.error) {
                state.errorMessage = action.payload.message;
            }
            else {
                state.errorMessage="";
                state.success=true;
            }
        })
    }
});

export const sendReview = createAsyncThunk('review/sendReview',async(reviewInfo,{getState})=> {
    const state = getState();
    const sendReviewFetch = await fetch ('https://ueat-api.herokuapp.com/sendReview',{
        method:'POST',
        headers: {
            Authorization: `Bearer ${state.user.user.token}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            stars: reviewInfo.stars,
            details: reviewInfo.details,
            restId: reviewInfo.id
        })
    });
    const ReviewData = await sendReviewFetch.json();
    if (sendReviewFetch.status===200){
        return ReviewData;
    }
    else {
        console.log(ReviewData.message);
        return {
            error:true,
            message: ReviewData.message
        }
    }
})

export default reviewSlice.reducer;