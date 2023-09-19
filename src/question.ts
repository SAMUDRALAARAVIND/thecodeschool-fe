export const mockQuestion = {
    description: `
    <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <i>target.</i> </p>
    <p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
    <p>You can return the answer in any order.<p>`,

    examples: [
        {
            input: "nums = [2,7,11,15], target = 9",
            output: "[0,1]",
            explanation: "Because nums[0] + nums[1] == 9, we return <code>[0, 1]</code>."
        },
        {
            input: "nums = [2,7,11,15], target = 9",
            output: "[0,1]",
            explanation: "Because nums[0] + nums[1] == 9, we return <code>[0, 1]</code>."
        }
    ],

    constraints: [
        "<code>2 <= nums.length <= 104</code>",
        "<code>-109 <= nums[i] <= 109</code>",
        "<code>-109 <= target <= 109</code>",
        "<b>Only one valid answer exists.</b>"
    ]
}
