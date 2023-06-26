<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use OpenAI\Laravel\Facades\OpenAI;
//use OpenAI\Client as OpenAIClient;

// use Aws\S3\S3Client;
// use Aws\S3\Exception\S3Exception;
use Illuminate\Support\Facades\Storage;

class OpenAIController extends Controller
{

    public function callApiDirect()
    {        
    }

    public function callApiByOpenAIPhp()
    {

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
    }


    public function callEditApiByOpenAiPhp(Request $request)
    {

        // $srcImage = $request->file('srcImage')->getClientOriginalName();
        // $maskImage = $request->file('maskImage')->getClientOriginalName();

        $srcImageRealPath = $request->file('srcImage')->getRealPath();
        $maskImageRealPath = $request->file('maskImage')->getRealPath();

        $prompt = $request->input('prompt');

        $response = OpenAI::images()->edit([
            'image' => fopen($srcImageRealPath, 'r'),
            'mask' => fopen($maskImageRealPath, 'r'),
            'prompt' => isset($prompt) ? $prompt : 'A sunlit indoor lounge area with a pool containing a flamingo',
            'n' => 1,
            'size' => '256x256',
            'response_format' => 'url',
        ]);


        $response->created; // 1589478378
        $openAicreatedFileUrl = null;
        foreach ($response->data as $data) {
            $data->url; // 'https://oaidalleapiprodscus.blob.core.windows.net/private/...'
            $data->b64_json; // null
            $openAicreatedFileUrl = $data->url; 
           
        }
        
        // https://oaidalleapiprodscus.blob.core.windows.net/private/org-76MUttBpdptRjQx73USrEMUB/user-lUW9Vz3GtpFRMUbRaZXC9ca0/img-DKcc9dqGC4RjXxolJ5cOUixD.png?st=2023-05-28T19%3A40%3A17Z&se=2023-05-28T21%3A40%3A17Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-05-28T11%3A09%3A43Z&ske=2023-05-29T11%3A09%3A43Z&sks=b&skv=2021-08-06&sig=pXRT0ya1bN72tOMul5byGq8vzLGztK6FPLwJlQQUEhA%3D


        // S3へファイルをアップロード
         
        //$result = Storage::disk('s3')->put('/test', file_get_contents('https://oaidalleapiprodscus.blob.core.windows.net/private/org-76MUttBpdptRjQx73USrEMUB/user-lUW9Vz3GtpFRMUbRaZXC9ca0/img-DKcc9dqGC4RjXxolJ5cOUixD.png?st=2023-05-28T19%3A40%3A17Z&se=2023-05-28T21%3A40%3A17Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-05-28T11%3A09%3A43Z&ske=2023-05-29T11%3A09%3A43Z&sks=b&skv=2021-08-06&sig=pXRT0ya1bN72tOMul5byGq8vzLGztK6FPLwJlQQUEhA%3D'));
        //$result = Storage::disk('s3')->put('/test', file_get_contents('https://s3.ap-northeast-3.amazonaws.com/bitkids.samurai.2302/lp001.png'));

        
        //$result = Storage::disk('s3')->put('/', file_get_contents($openAicreatedFileUrl));       

        if( !is_null($openAicreatedFileUrl) ) {
            //$result = Storage::disk('s3')->put('/', file_get_contents($openAicreatedFileUrl));
            //上書き
            $result = Storage::disk('s3')->put('/autocreated', file_get_contents($data->url));
            // アップロードの成功判定
            if ($result) {
               // return 'アップロード成功';
            }else {
              //  return 'アップロード失敗';
            }    
        }


        return $response->toArray(); 



    }

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
