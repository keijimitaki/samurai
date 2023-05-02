<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use OpenAI\Laravel\Facades\OpenAI;

class OpenAiController extends Controller
{
    //
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        
        // SUCCESS !!!
        // $result = OpenAI::completions()->create([
        //     'model' => 'text-davinci-003',
        //     'prompt' => 'PHP is',
        // ]);
        // dd($result['choices'][0]['text']);

        $response = OpenAI::images()->create([
            'prompt' => 'A cute baby sea otter',
            'n' => 1,
            'size' => '256x256',
            'response_format' => 'url',
        ]);
        
        $response->created; // 1589478378
        
        foreach ($response->data as $data) {
            $data->url; // 'https://oaidalleapiprodscus.blob.core.windows.net/private/...'
            $data->b64_json; // null
        }
        
        return $response->toArray(); 
        //dd($response);


        // $apiKey = getenv('OPENAI_API_KEY');
        // $client = OpenAI::client($apiKey);
        

        // $result = $client->completions()->create([
        //     'model' => 'text-davinci-003',
        //     'prompt' => 'PHP is',
        // ]);


        //return view('openai');
    }

}
