# Documentation Generator
A VSCode extention that leverages the Hugging Face Inference API to generate comments describing Python code. This code was written during a demo webinar - you can watch the full recording and each step of the process in the event room [here](https://app.livestorm.co/hugging-face/github-copilot-with-hugging-face-api?type=detailed&utm_source=lk&utm_medium=social&utm_campaign=copilot1).

### Usage
- Sign up at [hf.co](https://huggingface.co/) to recieve your API key
- Add your API key to /src/api_key.ts
- Open this project in VSCode and run in debug mode by pressing F5 (since this isn't a published VSCode Extension, running in debug mode is the easiest way to play with the code)
- Write some Python code, select it, right-click, and call Generate Comment to see the results!

### Citations
- Youtube tutorial for creating a VSCode Extension: https://www.youtube.com/watch?v=SYjgPjQ-vbc&ab_channel=NathanCooper
- Machine Learning Model used for documentation generation from python code: [SEBIS/code_trans_t5_base_code_documentation_generation_python_multitask_finetune](https://huggingface.co/SEBIS/code_trans_t5_base_code_documentation_generation_python_multitask_finetune)
