import {createAsyncThunk} from  "@reduxjs/toolkit";

export const postReview = createAsyncThunk('review/postReview', async (reviewInfo) => {
    const reviewFetch = await fetch('http://localhost:7500/review',{
        method:'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            points:reviewInfo.points,
            details:reviewInfo.details,
            userId:reviewInfo.userId
        })
    });

    const reviewData = await reviewFetch.json();
    if (reviewFetch.status === 200){
        return reviewData;
    } else {
        return {
            error: true,
            message: reviewData.message
        }
    }
})

export const sendReview = createAsyncThunk('review/sendReview',async(reviewInfo,{getState})=> {
    const state = getState();
    const sendReviewFetch = await fetch ('http://localhost:7500/review',{
        method:'POST',
        headers: {
            Authorization: `Bearer ${state.user.user.token}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            points: reviewInfo.points,
            details: reviewInfo.details,
            userId: reviewInfo.userId
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