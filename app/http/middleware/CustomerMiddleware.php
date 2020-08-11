<?php
namespace app\http\middleware;

use app\models\store\StoreService;
use app\models\system\SystemStoreStaff;
use crmeb\interfaces\MiddlewareInterface;
use app\Request;

class CustomerMiddleware implements MiddlewareInterface
{

    public function handle(Request $request, \Closure $next)
    {
        $uid = $request->uid();
        if((!StoreService::orderServiceStatus($uid)) && (!SystemStoreStaff::verifyStatus($uid)))
            return app('json')->fail('权限不足');
        return $next($request);
    }
}